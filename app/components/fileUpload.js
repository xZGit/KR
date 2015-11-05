/**
 * Created by xx on 15/11/5.
 */


import React, { PropTypes } from 'react';
import FileUpload from '../common/Fileupload';

var Upload = React.createClass({

    propTypes: {
        handleFileUrl: React.PropTypes.func.isRequired,
        keys: React.PropTypes.string.isRequired,
    },


    options: {
        baseUrl: './upload',
        param: {},
        chooseAndUpload: true,
        paramAddToFile: [],
        dataType: 'json',
        wrapperDisplay: 'inline-block',
        beforeChoose: function () {
        },
        chooseFile: function (files) {
            console.log('you choose', typeof files == 'string' ? files : files[0].name);
        },
        beforeUpload: function (files, mill) {
            if (typeof files == "string") return false;
            if (files[0].size < 1024 * 1024 * 20) {
                files[0].mill = mill;
                return true;
            }
            return false;
        },
        doUpload: function (files, mill) {
            var isFile = !(typeof files == 'string');
            var name = isFile ? files[0].name : files;
            var tmpFile = {
                name: name,
                mill: isFile ? files[0].mill : mill
            };

            console.log('uploading', name);
        },
        uploading: function (progress) {
            console.log('loading...', progress.loaded / progress.total + '%');
        },
        uploadSuccess: function (resp) {
            console.log('upload success', resp.data);
            console.log(this.props);
            if (resp.data && resp.data.fileUrl) {
                this.props.options.handleFileUrl(this.props.options.keys, resp.data.fileUrl);
            }
        },
        uploadError: function (err) {
            alert(err.message);
        },
        uploadFail: function (resp) {
            alert(resp);
        },
    },


    render() {
        this.options.handleFileUrl = this.props.handleFileUrl;
        this.options.keys = this.props.keys;
        return (
            <FileUpload options={this.options}>
                <button ref="chooseAndUpload">上传</button>
            </FileUpload>

        );
    }
});


export default  Upload;