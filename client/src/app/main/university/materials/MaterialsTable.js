import React, { useState } from 'react';
import DataGrid, { RemoteOperations, Sorting, Editing, StateStoring, Column, Lookup, RequiredRule } from 'devextreme-react/data-grid';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import * as base from 'app/env';
import clsx from 'clsx';

const api = base.base_url;

const materialsDataSource = createStore({
  key: 'id',
  loadUrl: api + 'materials/get',
  insertUrl: api + 'materials/insert',
  updateUrl: api + 'materials/update',
  deleteUrl: api + 'materials/delete'
});

const typeDataSource = [
  { id: 1, type: 'Document' },
  { id: 2, type: 'Video' }
];

const useStyles = makeStyles({
  uploader_cell: {
    display: 'flex'
  },
  message: {
    color: '#fff',
    backgroundColor: '#1E2125',
    position: 'absolute',
    left: 0,
    top: '-95vh'
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

export default function MaterialsTable() {
  const [message, setMessage] = useState(false);
  const [file, setFile] = useState(null);
  const [myfile, setMyFile] = useState(null);

  const [icon, setIcon] = useState(false);

  const classes = useStyles();

  const hideMessage = () => {
    setMessage(false);
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) { return; }
    const reader = new FileReader();

    reader.readAsText(file);
    setMyFile(file);

    reader.onload = () => {
      const readback = reader.result;
      setFile(readback.name);
      setIcon(true);
    };
  };

  const customCell = (data) => {
    const value = data.value;
    if (value === null) {
      return "File is either not uploaded or not required.";
    }
    return (
      <div>
        <Icon className="mt-16">attach_file</Icon>
        <p>{file}</p>
      </div>
    );
  };

  const fileUploader = (data) => {
    return (
      <div className={classes.uploader_cell}>
        <input accept=".png, .pdf, .ppt, .doc, .docx, .csv, .txt, image/*, video/*" className="hidden" id="button-file" type="file" onChange={handleUpload} />
        <label htmlFor="button-file" className="cursor-pointer">
          <Button variant="contained" className={clsx(classes.button, 'm-16 normal-case')} component="span">
            <Icon>attach_file</Icon>
          </Button>
        </label>

        {icon &&
          <>
            <Icon>insert_drive_file</Icon>
            <p>{file}</p>
          </>
        }
      </div>
    );
  };

  const onInitNewRow = () => {
    setFile(null);
    setIcon(false);
  };

  const onRowInserted = (data) => {
    const key = data.key;

    if (myfile !== null) {
      const formData = new FormData();
      formData.append("file", myfile);
      formData.append("key", key);
      fetch(api + 'uploadDoc', { method: 'PUT', body: formData })
        .then(res => { res.text() })

      setFile(null);
      setMyFile(null);
      setIcon(false);
    }
  };

  const onRowUpdated = (data) => {
    const key = data.key;

    if (myfile !== null) {
      const formData = new FormData();
      formData.append("file", myfile);
      formData.append("key", key);

      console.log('PPPP ~ updating')

      fetch(api + 'uploadDoc', { method: 'PUT', body: formData })
        .then(res => { res.text() })

      setFile(null);
      setMyFile(null);
      setIcon(false);
    }
  };

  return (
    <Paper className="w-full">
      {message &&
        <Snackbar
          open={true}
          onClose={hideMessage}
          ContentProps={{
            variant: 'body2',
            headlineMapping: {
              body1: 'div',
              body2: 'div'
            }
          }}
        >
          <SnackbarContent
            className={classes.message}
            message={
              <div className="flex items-center">
                <Typography className="mx-8">Materials saved.</Typography>
              </div>
            }
            action={[
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={hideMessage}
              >
                <Icon>close</Icon>
              </IconButton>
            ]}
          />
        </Snackbar>
      }
      <DataGrid
        dataSource={materialsDataSource}
        showBorders={true}
        rowAlternationEnabled={true}
        columnAutoWidth={true}
        onInitNewRow={onInitNewRow}
        onRowInserted={onRowInserted}
        onRowUpdated={onRowUpdated}
      >
        <RemoteOperations />
        <Sorting mode="multiple" />
        <Editing mode="row" allowUpdating={true} allowDeleting={true} allowAdding={true} />
        <StateStoring enabled={true} type="localStorage" storageKey="materialsTable" />
        <Column dataField="type" caption="Type">
          <Lookup dataSource={typeDataSource} valueExpr="id" displayExpr="type" />
          <RequiredRule />
        </Column>
        <Column dataField="title" caption="Material Title">
          <RequiredRule />
        </Column>
        <Column dataField="url" caption="Link" />
        <Column dataField="docfile" caption="File" cellRender={customCell} editCellRender={fileUploader} />
      </DataGrid>
    </Paper>
  );
}
