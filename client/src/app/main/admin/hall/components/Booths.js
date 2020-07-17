import React, { useEffect, useState } from 'react';
import { Paper } from '@material-ui/core';
import DataGrid, { RemoteOperations, Paging, Pager, Editing, StateStoring, Column, Lookup } from 'devextreme-react/data-grid';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import * as base from 'app/env';

const api = base.base_url;

const boothsNo = 8;

export default function Booths(props) {
  const [name, setName] = useState([]);

  const id = '';

  useEffect(() => {
    // eslint-disable-next-line
    fetch(api + 'universities/get/:id=' + id).then(res => res.json()).then(results => { results.map(row => {
      const dat = {
        name: row.name
      };

      name.push(dat);
    })});
  });

  const customCell = (data) => {
    name.map(row => {
      return row.name;
    })
  };

  const boothDataSource = createStore({
    key: 'id',
    loadUrl: api + 'booth/get/:id=' + id,
    updateUrl: api + 'booth/update/:id=' + id
  });

  const positionDataSource = [];
  for(var i = 0; i < (boothsNo + 1); i++) {
    var data = { id: i, position: i };
    positionDataSource.push(data);
  }

  return (
    <Paper className="w-full">
      <DataGrid
        dataSource={boothDataSource}
        showBorders={true}
        rowAlternationEnabled={true}
        columnAutoWidth={true}
      >
        <RemoteOperations />
        <Editing mode="row"	allowUpdating={true} allowAdding={false} allowDeleting={false} />
        <StateStoring enabled={true} type="localStorage" storageKey="boothsTable" />
        <Column dataField="position" caption="Position">
          <Lookup dataSource={positionDataSource} valueExpr="id" displayExpr="position" />
        </Column>
        <Column dataField="base64" caption="University" width={200} cellRender={customCell} allowEditing={false} />
        <Pager showPageSizeSelector={true} allowedPageSizes={[16, 32]} showInfo={false} />
        <Paging enabled={true} defaultPageSize={16} />
      </DataGrid>
    </Paper>
  );
}
