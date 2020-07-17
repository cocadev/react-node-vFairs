import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Icon, Paper } from '@material-ui/core';
import DataGrid, { RemoteOperations, Editing, StateStoring, Column, Lookup } from 'devextreme-react/data-grid';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import Typography from '@material-ui/core/Typography';
import * as base from 'app/env';
import clsx from 'clsx';

const boothsNo = 8;
const bannersNo = boothsNo / 2;

const api = base.base_url;

const useStyles = makeStyles({
  uploader_cell: {
    display: 'flex'
  },
  banner_image: {
    width: '102px',
    height: '42px',
    margin: '13px 8px'
  },
  button: {
    background: '#039be5',
    color: '#fff',
    '&:hover': {
      background: '#039be5',
      color: '#fff'
    }
  }
});

export default function Banners(props) {
  const [image, setImage] = useState(null);

  const id = props.location.id;
  console.log(id);

  const bannerDataSource = createStore({
    key: 'id',
    loadUrl: api + 'banners/get/:id=' + id,
    insertUrl: api + 'banners/insert/:id=' + id,
    updateUrl: api + 'banners/update/:id=' + id,
    deleteUrl: api + 'banners/delete/:id=' + id
  });

  const positionDataSource = [];
  for(var i = 0; i < (bannersNo + 1); i++) {
    var data = { id: i, position: i };
    positionDataSource.push(data);
  }

  const classes = useStyles();

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) { return; }

    const reader = new FileReader();

    reader.readAsBinaryString(file);

    reader.onload = () => {
      const base64 = `data:${file.type};base64,${btoa(reader.result)}`;
      setImage(base64);
    };

    reader.onerror = function () {};
  }

  const positionCell = (data) => {
    return (
      <>
        <p>Position is added to your record. (current position: {data.value})</p>
        <i><small>If you want to add banner and not show it in the Hall set position to 0. Other positions shouldn't be overlapping.</small></i>
      </>
    );
  };

  const customCell = (data) => {
    const value = data.value;
    if (value === null) {
      return <img src="assets/images/fair/banners/placeholder.png" alt="Banner" />;
    }
    return <img src={value} alt="Banner" />;
  };

  const bannerUploader = (data) => {
    return (
      <div className={classes.uploader_cell}>
        <>
          <input accept="image/*" className="hidden" id="button-file" type="file" onChange={handleUpload} />
          <label htmlFor="button-file" className="cursor-pointer">
            <Button variant="contained" className={clsx(classes.button, 'm-16 normal-case')} component="span">
              <Icon>add_photo_alternate</Icon>
            </Button>
          </label>
        </>
        <>{image && <img className={classes.banner_image} src={image} alt="Banner" /> }</>
      </div>
    );
  };

  const onInitNewRow = () => {
    setImage(null);
  };

  const onRowInserted = (data) => {
    const key = data.key;
    if(image !== null) {
      fetch(api + '/updateBanner/:' + id, { method: 'PUT', body: '{"banner": "' + image + '", "key": "' + key + '"}', headers: { 'Content-Type': 'application/json' } }).then(res => res.text())
      setImage(null);
    }
  };

  const onRowUpdated = (data) => {
    const key = data.key;
    if(image !== null) {
      fetch(api + '/updateBanner/:' + id, { method: 'PUT', body: '{"banner": "' + image + '", "key": "' + key + '"}', headers: { 'Content-Type': 'application/json' } }).then(res => res.text())
      setImage(null);
    }
  };

  return (
    <Paper className="w-full">
      <DataGrid
        dataSource={bannerDataSource}
        showBorders={true}
        rowAlternationEnabled={true}
        columnAutoWidth={true}
        onInitNewRow={onInitNewRow}
        onRowInserted={onRowInserted}
        onRowUpdated={onRowUpdated}
      >
        <RemoteOperations />
        <Editing mode="row"	allowUpdating={true} allowDeleting={true} allowAdding={true} />
        <StateStoring enabled={true} type="localStorage" storageKey="bannersTable" />
        <Column dataField="position" caption="Position" cellRender={positionCell}>
          <Lookup dataSource={positionDataSource} valueExpr="id" displayExpr="position" />
        </Column>
        <Column dataField="link" caption="Link" />
        <Column dataField="base64" caption="Banner" width={200} cellRender={customCell} editCellRender={bannerUploader} />
      </DataGrid>
      <Typography className="text-16 mt-16 ml-16 pb-16" color="textSecondary"><b>Important: </b>Maximum allowed size is 64KB and ideal width would be 205px while height is 86px.</Typography>
    </Paper>
  );
}
