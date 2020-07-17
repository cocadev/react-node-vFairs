import React, { useEffect } from 'react';
import DataGrid, { RemoteOperations, SearchPanel, Sorting, Paging, Pager, Editing, StateStoring, Export, Selection, GroupPanel, Column, RequiredRule, Lookup, FormItem } from 'devextreme-react/data-grid';
import { appendNavigationItem, updateNavigationItem } from 'app/store/actions/fuse';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import Paper from '@material-ui/core/Paper';
import * as base from 'app/env';
import store from 'app/store';
import { authRoles } from 'app/auth';

const api = base.base_url;

const fairsDataSource = createStore({
  key: 'id',
  loadUrl: api + 'fairs/get',
  insertUrl: api + 'fairs/insert',
  updateUrl: api + 'fairs/update',
  deleteUrl: api + 'fairs/delete'
});

const schoolDataSource = createStore({
  key: 'id',
  loadUrl: api + 'schools/get',
});

export default function FairsTable() {
  var fairs = [];

  useEffect(() => {
    // eslint-disable-next-line
    fetch(api + 'fairs/get').then(response => response.json()).then(data => data.map(row => {
    	const data = {
    		id: row.id,
    		title: row.name,
    		auth: authRoles.admin,
    		type: 'item',
    		icon: 'schedule',
    		url: '/admin/hall/:id=' + row.id
    	};
    	fairs.push(data);
    }))
  });

  const customCell = (data) => {
    const src = data.value;
    if (src === undefined) {
      return <img src='assets/images/avatars/profile.jpg' alt="vFair" />;
    }
    return <img src={data.value} alt="vFair" />;
  };

  const onRowInserted = (data) => {
    console.log('data: ' + data);
    console.log('data.value[0]: ' + data.value[0]);
    console.log('data.value.name: ' + data.value.name);
    console.log('data.name: ' + data.name);
    const name = data.value[0];
    // eslint-disable-next-line
    fairs.map(row => {
      const title = row.title;
      if (title === name) {
        const item = {
          id: row.id,
          title: row.title,
          auth: row.auth,
          type: row.type,
          icon: row.icon,
          url: row.url
        };
        store.dispatch(appendNavigationItem(item, 'hall'));
      }
    })
  };

  const onRowUpdated = (data) => {
    const name = data.value[0];
    const key = data.key;
    // eslint-disable-next-line
    fairs.map(row => {
      const id = row.id;
      if (id === key) {
        const item = {
          id: row.id,
          title: row.title,
          auth: row.auth,
          type: row.type,
          icon: row.icon,
          url: row.url
        };
        store.dispatch(updateNavigationItem(id, item));
      }
    })
  };

  return (
    <Paper className="w-full">
      <DataGrid
        dataSource={fairsDataSource}
        showBorders={true}
        allowColumnResizing={true}
        allowColumnReordering={true}
        rowAlternationEnabled={true}
        columnAutoWidth={true}
        onRowInserted={onRowInserted}
        onRowUpdated={onRowUpdated}
      >
				<RemoteOperations />
				<SearchPanel visible={true} width={240} placeholder="Search..." />
				<Sorting mode="multiple" />
				<Editing mode="form"	allowUpdating={true} allowDeleting={false} allowAdding={true} />
				<StateStoring enabled={true} type="localStorage" storageKey="fairsTable" />
				<Export enabled={true} fileName="Virtual Fairs" allowExportSelectedData={true} />
        <Selection mode="multiple" />
				<GroupPanel visible={true} />
        <Column dataField="logo" caption="Logo" width={100} allowSorting={false} cellRender={customCell} visible={false}>
          <FormItem colSpan={2} visible={false} />
        </Column>
				<Column dataField="name" dataType="string" caption="Friendly Name">
          <RequiredRule />
        </Column>
				<Column dataField="start" dataType="datetime" caption="Start Time">
          <RequiredRule />
        </Column>
				<Column dataField="end" dataType="datetime" caption="End Time">
          <RequiredRule />
        </Column>
				<Column dataField="g12" dataType="number" caption="Number of G12 Students" visible={false}>
          <RequiredRule />
        </Column>
				<Column dataField="g11" dataType="number" caption="Number of G11 Students" visible={false}>
          <RequiredRule />
        </Column>
				<Column dataField="max" dataType="number" caption="Max # of Universities">
          <RequiredRule />
        </Column>
        <Column dataField="school" caption="School">
          <Lookup dataSource={schoolDataSource} valueExpr="id" displayExpr="name" />
          <RequiredRule />
        </Column>
        <Pager showPageSizeSelector={true} allowedPageSizes={[5, 10, 20, 50]} showInfo={false} />
        <Paging enabled={true} defaultPageSize={5} />
      </DataGrid>
    </Paper>
  );
}
