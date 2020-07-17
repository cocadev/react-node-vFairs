import React, { Component } from 'react';
import DataGrid, { RemoteOperations, SearchPanel, Sorting, Paging, Pager, Editing, StateStoring, Export, Selection, GroupPanel, Column, RequiredRule, EmailRule, FormItem } from 'devextreme-react/data-grid';
import { Template } from 'devextreme-react/core/template';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import * as base from 'app/env';

const api = base.base_url;

const representativesDataSource = createStore({
  key: 'id',
  loadUrl: api + 'representatives/get',
  insertUrl: api + 'representatives/insert',
  updateUrl: api + 'representatives/update',
  deleteUrl: api + 'representatives/delete'
});

class RepsTable extends Component {
	constructor(props) {
		super(props);

    this.onToolbarPreparing = this.onToolbarPreparing.bind(this);
    this.toolbarItemRender = this.toolbarItemRender.bind(this);
    this.dataGrid = null;
  }

  toolbarItemRender() {
    return (
      <Typography className="text-24">Representatives List</Typography>
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
          dataSource={representativesDataSource}
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
  				<Editing mode="form"	allowUpdating={true} allowDeleting={true} allowAdding={true} />
  				<StateStoring enabled={true} type="localStorage" storageKey="representativesTable" />
  				<Export enabled={true} fileName="Representatives" allowExportSelectedData={true} />
          <Selection mode="multiple" />
  				<GroupPanel visible={false} />
          <Column dataField="logo" caption="Photo" width={100} allowSorting={false} cellRender={customCell}>
            <FormItem colSpan={2} visible={false} />
          </Column>
  				<Column dataField="name" caption="Name">
            <RequiredRule />
          </Column>
          <Column dataField="phone" caption="Phone" visible={false} />
          <Column dataField="email" caption="Email">
            <RequiredRule />
            <EmailRule />
          </Column>
          <Column dataField="password" caption="Password" visible={false}>
            <RequiredRule />
          </Column>
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
    return <img src='assets/images/avatars/profile.jpg' alt="Representative" />;
  }
  return <img src={data.value} alt="Representative" />;
};

export default RepsTable;
