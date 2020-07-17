import React, { Component } from 'react';
import DataGrid, { RemoteOperations, Sorting, Editing, StateStoring, Column, RequiredRule } from 'devextreme-react/data-grid';
import { Template } from 'devextreme-react/core/template';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import * as base from 'app/env';

const api = base.base_url;

const menuDataSource = createStore({
  key: 'id',
  loadUrl: api + 'menu/get',
  insertUrl: api + 'menu/insert',
  updateUrl: api + 'menu/update',
  deleteUrl: api + 'menu/delete'
});

class LinksTable extends Component {
	constructor(props) {
		super(props);

    this.onToolbarPreparing = this.onToolbarPreparing.bind(this);
    this.toolbarItemRender = this.toolbarItemRender.bind(this);
    this.dataGrid = null;
  }

  toolbarItemRender() {
    return (
      <Typography className="text-24">Menu Items List</Typography>
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
          dataSource={menuDataSource}
          showBorders={true}
          allowColumnResizing={true}
          allowColumnReordering={true}
          ref={(ref) => this.dataGrid = ref}
          rowAlternationEnabled={true}
          columnAutoWidth={true}
          onToolbarPreparing={this.onToolbarPreparing}
        >
  				<RemoteOperations />
  				<Sorting mode="multiple" />
  				<Editing mode="row"	allowUpdating={true} allowDeleting={true} allowAdding={true} />
  				<StateStoring enabled={true} type="localStorage" storageKey="menuTable" />
  				<Column dataField="title" caption="Title">
            <RequiredRule />
          </Column>
          <Column dataField="url" caption="Link">
            <RequiredRule />
          </Column>
          <Template name="newHeaderLayout" render={this.toolbarItemRender} />
        </DataGrid>
      </Paper>
    );
  }
}

export default LinksTable;
