import React, { Component } from 'react';
import DataGrid, { RemoteOperations, SearchPanel, Sorting, Paging, Pager, StateStoring, Export, Selection, Column } from 'devextreme-react/data-grid';
import { Template } from 'devextreme-react/core/template';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import * as base from 'app/env';

const api = base.base_url;

const schoolsDataSource = createStore({
  key: 'id',
  loadUrl: api + 'schools/get',
});

class SchoolsTable extends Component {
	constructor(props) {
		super(props);

    this.onToolbarPreparing = this.onToolbarPreparing.bind(this);
    this.toolbarItemRender = this.toolbarItemRender.bind(this);
    this.dataGrid = null;
  }

  toolbarItemRender() {
    return (
      <Typography className="text-24">Schools Lookup</Typography>
    );
  }

  onToolbarPreparing(e) {
    e.toolbarOptions.items.unshift({
      location: 'before',
      template: 'newHeaderLayout'
    });
  }

  render() {
    return (
      <Paper className="w-full">
        <DataGrid
          dataSource={schoolsDataSource}
          showBorders={true}
          allowColumnResizing={true}
          allowColumnReordering={true}
          ref={(ref) => this.dataGrid = ref}
          rowAlternationEnabled={true}
          columnAutoWidth={true}
          onToolbarPreparing={this.onToolbarPreparing}
        >
  				<RemoteOperations />
  				<SearchPanel visible={true} width={240} placeholder="Search..." />
  				<Sorting mode="multiple" />
  				<StateStoring enabled={true} type="localStorage" storageKey="schoolsTable" />
  				<Export enabled={true} fileName="Schools" allowExportSelectedData={true} />
          <Selection mode="multiple" />
          <Column dataField="logo" caption="Photo" width={100} allowSorting={false} cellRender={customCell} />
  				<Column dataField="name" caption="Name" />
          <Column dataField="phone" caption="Phone" />
          <Column dataField="email" caption="Email" />
          <Pager showPageSizeSelector={true} allowedPageSizes={[5, 10, 20, 50]} showInfo={false} />
          <Paging enabled={true} defaultPageSize={5} />
          <Template name="newHeaderLayout" render={this.toolbarItemRender} />
        </DataGrid>
      </Paper>
    );
  }
}

const customCell = (data) => {
  const src = data.value;
  if (src === undefined) {
    return <img src='assets/images/avatars/profile.jpg' alt="School" />;
  }
  return <img src={src} alt="School" />;
};

export default SchoolsTable;
