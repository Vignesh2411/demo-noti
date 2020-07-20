import React, {Component} from 'react';

import Button from '../../components/UI/Button/Button'
import classes from './Noti.module.css'

import addNotification from 'react-push-notification';

import firebase from '../../firebase';


class Noti extends Component {

    componentDidMount () {
     

      const messaging = firebase.messaging()
        messaging.requestPermission().then(()=>{
          return messaging.getToken()
        }).then(token=>{
          console.log('Token : ',token)
          console.log('welcome')
        }).catch((err)=>{
          console.log(err);
          
        })
    }

    logoutModeHandler = () => {
        this.props.history.push('/logout');
    }

    notificationModeHandler = () => {  

       addNotification({
            title: 'Welcome To My Page',
           subtitle: 'This is a subtitle',
            message: 'You have received some message',
            theme: 'darkblue',
            native: true // when using native, your OS will handle theming.
        });      
    }

    render() {

        return(

            <div className={classes.Noti}>
                 <Button 
                    clicked={this.notificationModeHandler}
                    btnType="Success">SendPushNotification</Button>

                <Button 
                    clicked={this.logoutModeHandler}
                    btnType="Danger">Logout</Button>
            </div>
        );
    }
}


export default Noti;


//Note:

//npm install gh-pages --save-dev

//git init

//git remote add origin "https://github.com/Vignesh2411/demo-noti.git"

//  "homepage": "http://Vigneshtj2411.github.io/demo-noti",