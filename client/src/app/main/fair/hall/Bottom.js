import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

export default function UniTable() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2} style={{ padding: 4 }}>
        <Grid item xs={3} >
          <Paper className={classes.paper}>Colleges & Universities</Paper>
          <div className={classes.list}>
            <Item />
            <Item />
            <Item />
          </div>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Courses & Programs</Paper>
          <div className={classes.list}>
            <Item />
            <Item />
            <Item />
          </div>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Study & Destinations</Paper>
          <div className={classes.list}>
            <Item />
            <Item />
            <Item />
          </div>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper2}>Hall Chat</Paper>
          <div className={classes.list}>
            <CustomInput />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

function Item() {
  const classes = useStyles();
  return (
    <div className={classes.item}>
      <img src='https://brandmark.io/logo-rank/random/pepsi.png' className={classes.logo} />
      <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', flex: 1 }}>
        <div style={{ flex: 1, paddingTop: 5 }}>
          <h3>University Sample1</h3>
          <p style={{ color: '#2495ED', fontSize: 9 }}>United States of America</p>
        </div>
        <div style={{ marginRight: 12 }}>
          <p style={{ fontSize: 9, marginTop: 4 }}>Programs</p>
          <div className={classes.roundText}>
            <p style={{ color: 'white' }}>50</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function CustomInput() {
  const classes = useStyles();
  return (
    <div style={{ maxHeight: 190, overflowY: 'scroll' }}>
      {
        chats.map((item, index) => <ChatItem key={index} data={item} />)
      }
      <TextField
        className={classes.chatInput}
        placeholder={'Type your message'}
      />
    </div>
  )
}

function ChatItem(props) {
  const classes = useStyles();
  const { me, text, date, avatar } = props.data;
  return (
    <div className={classes.chatItem} style={{ justifyContent: me ? 'flex-start' : 'flex-end' }}>
      <img src={avatar} className={classes.logo} />
      <div>
        <div className={classes.chatBox} style={{ background: me ? '#555' : '#dfdfdf', minHeight: 40 }}>
          <p style={{ color: me ? 'white' : 'black', padding: 6, paddingLeft: 12, paddingRight: 12 }}>{text}</p>
        </div>
        <h6 style={{ textAlign: me ? 'left' : 'right', marginHorizontal: 3 }}>{date}</h6>
      </div>
    </div>
  )
}

const chats = [
  {
    me: true,
    avatar: 'https://i2.wp.com/nofiredrills.com/wp-content/uploads/2016/10/myavatar.png',
    text: 'You are good!',
    date: '1/22/17 2:02 PM'
  },
  {
    me: true,
    avatar: 'https://i2.wp.com/nofiredrills.com/wp-content/uploads/2016/10/myavatar.png',
    text: 'Are you available today?',
    date: '1/22/17 2:02 PM'
  },
  {
    me: false,
    avatar: 'https://gentnews.com/files/img/twitter_account_142.jpg',
    text: 'We are looking for a great JavaScript developer who is proficient with React.js and Typescript. This is a full time position. Please do not apply if you cannot work with us as a full-time employee. Your primary focus will be on developing user interface components and implementing them following well-known React.js concepts such as hooks. You will ensure that these components and the overall application are robust and easy to maintain.',
    date: '1/22/17 2:02 PM'
  },
  {
    me: true,
    avatar: 'https://i2.wp.com/nofiredrills.com/wp-content/uploads/2016/10/myavatar.png',
    text: 'Thanks a lot!',
    date: '1/22/17 2:02 PM'
  },
]


const useStyles = makeStyles({
  paper: {
    textAlign: 'center',
    background: '#2495ED',
    color: '#fff',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  paper2: {
    textAlign: 'center',
    background: '#46AB5B',
    color: '#fff',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    marginTop: 3,
  },
  item: {
    border: '1px solid lightgrey',
    marginTop: 3,
    paddingHorizontal: 3,
    display: 'flex',
    flexDirection: 'row'
  },
  logo: {
    width: 52,
    height: 52,
    borderRadius: 26
  },
  roundText: {
    background: '#2495ED',
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    marginLeft: 6
  },
  chatInput: {
    flex: 1,
    display: 'flex',
    height: 30,
    borderRadius: 20,
    border: '1px solid lightgrey',
    background: '#fff',
    paddingLeft: 8,
    outline: 0
  },
  chatItem: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 8,
    marginTop: 15
  },
  chatBox: {
    background: '#dfdfdf',
    borderRadius: 22,
    maxWidth: 370,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});