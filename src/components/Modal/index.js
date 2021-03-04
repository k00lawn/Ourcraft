

import React from 'react';
import style from './style';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        width: '60%',
        padding: 0
    };
}

const ModalComponent = (props) => {

    const {
        classes, open, onClose, headerText, children, footer, centerheader, closeButton
    } = props;


    return (
        <div className={classes.modal}>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={onClose}
            >
                <div style={getModalStyle()} className={classes.modalWrap}>
                    {/* <div className={classes.modalHeader}>
                            {centerheader ? (<div style={{ textAlign: 'center', color: 'black' }}>{headerText}</div>) : headerText}
                        </div> */}

                    <div className={classes.modalBody}>
                        {children}
                    </div>

                    {footer && footer.text ? (
                        <div className={classes.modalFooter}>
                            {footer.text}
                        </div>
                    ) : null}
                </div>
            </Modal>
        </div>
    );
}

export default withStyles(style)(ModalComponent);

