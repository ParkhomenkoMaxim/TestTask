import React, { Component } from "react";
import Firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';

class ImgLoader extends Component {
    constructor(props) {
      super(props);
      this.state = {
        image: '',
        isUploading: false,
        progress: 0,
        imageURL: '',
      };

      this.handleUploadStart = this.handleUploadStart.bind(this);
      this.handleProgress = this.handleProgress.bind(this);
      this.handleUploadError = this.handleUploadError.bind(this);
      this.handleUploadSuccess = this.handleUploadSuccess.bind(this);
    }


      handleUploadStart = () => this.setState({isUploading: true, progress: 0});
      handleProgress = (progress) => this.setState({progress});
      handleUploadError = (error) => {
        this.setState({isUploading: false});
        console.error(error);
      }
      handleUploadSuccess = (filename) => {
        this.setState({image: filename, progress: 100, isUploading: false});
        Firebase.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({imageURL: url}));
      };


  render() {
    return (

    <div>
      <form className = 'imgForm'>

      <label>Image:</label>
      {this.state.isUploading &&
      <p>Progress: {this.state.progress}</p>}

      {this.state.imageURL &&
      <img alt = "" src={this.state.imageURL} />}

    <label style={{backgroundColor: 'slateblue', color: 'white',
    padding: 10, margin: 5, borderRadius: 4, pointer: 'cursor'}}>
      Add image
      <FileUploader
      accept="image/*"
      name="image"
      hidden
      multiple
      randomizeFilename
      storageRef={Firebase.storage().ref('images')}
      onUploadStart={this.handleUploadStart}
      onUploadError={this.handleUploadError}
      onUploadSuccess={this.handleUploadSuccess}
      onProgress={this.handleProgress}
      maxHeight={350}
      maxWidth={600}
      />
    </label>

      </form>
    </div>

    );
  }
}


export default ImgLoader;
