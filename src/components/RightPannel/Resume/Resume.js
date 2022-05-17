import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resume from '../../../assets/doc/Surya Prakash Pandey-CV.pdf';
import classes from './Resume.module.css';
import { Button, Typography, Grid } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import countapi from 'countapi-js';

const Resume = () => {
    const [file, setFile] = useState(resume);
    const [numPages, setNumPages] = useState(null);
    const [views, setViews] = useState(0);


    useEffect(() => {
        countapi.info("surya5954.github.io", "ea6447a7-199c-439d-91b2-cd6dee6c8281")
            .then((data) => {
                console.log(data.value);
                setViews(data.value);
            })
    }, [])

    const downloadResume = () => {
        countapi.hit('surya5954.github.io', 'ea6447a7-199c-439d-91b2-cd6dee6c8281').
            then((result) => {
                console.log(result)
                setViews(result.value)
            });
    }

    function onFileChange(event) {
        setFile(event.target.files[0]);
    }

    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages);

    }

    return (
        <div>

            <a className={classes.downloadBtn} href={file} download><Button variant="contained" onClick={downloadResume}> {views} : Downloads<GetAppIcon /></Button></a>

            <div className={classes.ResumeDiv}>
                <div className="Example__container">
                    <div className="Example__container__document">
                        <Document
                            file={file}
                            onLoadSuccess={onDocumentLoadSuccess}
                        // options={options}
                        >
                            {
                                Array.from(
                                    new Array(numPages),
                                    (el, index) => (
                                        <Page
                                            key={`page_${index + 1}`}
                                            pageNumber={index + 1}
                                        />
                                    ),
                                )
                            }
                        </Document>

                    </div>
                </div>
            </div>
        </div >
    );
}

export default Resume;
