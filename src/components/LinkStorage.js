import { Component } from "react";
import { app } from "../firebaseConf";
import {getStorage, ref, getDownloadURL} from 'firebase/storage'

export class LinkStorage extends Component{

    state = {
        downloadURL: '#'
    }

    setUrl = (url) => {
        this.setState({
            downloadURL: url
        })
    }

    render(){
        let downloadURL = this.state.downloadURL;
        let defaultStorage = getStorage(app);
        let fileRef = ref(defaultStorage,'CV_LEFIEF.pdf');

        if(downloadURL === '#' || downloadURL === ''){
            getDownloadURL(fileRef).then((downloadURL) => {
                console.log(downloadURL);
                const mylifebelike = document.getElementById('linkDownloadCv');
                if(mylifebelike != null){
                    mylifebelike.setAttribute('href', downloadURL);
                }
            })
        }

        return(
            <div>
                <a className="text-2xl border-r-8" id="linkDownloadCv" href="#waitingValue" target="_blank">
                    Télécharger le CV
                </a>
            </div>
        )
    }
}