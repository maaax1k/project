import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



function Pop_up(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <style type='text/css'>
                {`
                    .fade{
                        transition: opacity .15s linear;
                    }
                    .modal-backdrop.show {
                        opacity: var(--bs-backdrop-opacity);
                      }
                    .modal-backdrop {
                        --bs-backdrop-zindex: 1050;
                        --bs-backdrop-bg: #000;
                        --bs-backdrop-opacity: 0.5;
                        position: fixed;
                        top: 0;
                        left: 0;
                        z-index: var(--bs-backdrop-zindex);
                        width: 100vw;
                        height: 100vh;
                        background-color: var(--bs-backdrop-bg);
                      }
                    .modal{
                        display: block;
                        --bs-modal-margin: 1.75rem;
                        --bs-modal-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
                        --bs-modal-zindex: 1055;
                        --bs-modal-width: 500px;
                        --bs-modal-padding: 1rem;
                        --bs-modal-margin: 0.5rem;
                        --bs-modal-color: black ;
                        --bs-modal-bg: #fff;
                        --bs-modal-border-color: var(--bs-border-color-translucent);
                        --bs-modal-border-width: 1px;
                        --bs-modal-border-radius: 0.5rem;
                        --bs-modal-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
                        --bs-modal-inner-border-radius: calc(0.5rem - 1px);
                        --bs-modal-header-padding: 1rem 1rem;
                        --bs-modal-header-border-color: var(--bs-border-color);
                        --bs-modal-header-border-width: 1px;
                        --bs-modal-title-line-height: 1.5;
                        --bs-modal-footer-gap: 0.5rem;
                        --bs-modal-footer-bg: ;
                        --bs-modal-footer-border-color: var(--bs-border-color);
                        --bs-modal-footer-border-width: 1px;
                        position: fixed;
                        top: 30%;
                        left: calc(50% - 400px);
                        z-index: var(--bs-modal-zindex);
                        display: flex;
                        width: 800px;
                        height: 100%;
                      }
                      
                      .modal.show .modal-dialog {
                        transform: none;
                      }
                      .modal.fade .modal-dialog {
                        transition: transform .3s ease-out;
                        transform: translate(0,-50px);
                      }
                        @media (min-width: 576px)
                      .modal-dialog {
                        max-width: var(--bs-modal-width);
                        margin-right: auto;
                        margin-left: auto;
                      }
                      .modal-dialog {
                        position: relative;
                        width: auto;
                        margin: var(--bs-modal-margin);
                        pointer-events: none;
                      }
                      .modal-content {
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                        color: var(--bs-modal-color);
                        pointer-events: auto;
                        background-color: var(--bs-modal-bg);
                        background-clip: padding-box;
                        border: var(--bs-modal-border-width) solid var(--bs-modal-border-color);
                        border-radius: var(--bs-modal-border-radius);
                        outline: 0;
                      }
                      .modal-header {
                        display: flex;
                        flex-shrink: 0;
                        align-items: center;
                        justify-content: space-between;
                        padding: var(--bs-modal-header-padding);
                        border-bottom: var(--bs-modal-header-border-width) solid var(--bs-modal-header-border-color);
                        border-top-left-radius: var(--bs-modal-inner-border-radius);
                        border-top-right-radius: var(--bs-modal-inner-border-radius);
                      }
                      .modal-title {
                        margin-bottom: 0;
                        line-height: var(--bs-modal-title-line-height);
                      }
                      .modal-header .btn-close {
                        padding: calc(var(--bs-modal-header-padding-y) * .5) calc(var(--bs-modal-header-padding-x) * .5);
                        margin: calc(-.5 * var(--bs-modal-header-padding-y)) calc(-.5 * var(--bs-modal-header-padding-x)) calc(-.5 * var(--bs-modal-header-padding-y)) auto;
                      }
                      [type="button"]:not(:disabled), [type="reset"]:not(:disabled), [type="submit"]:not(:disabled), button:not(:disabled) {
                        cursor: pointer;
                      }
                      .btn-close {
                        box-sizing: content-box;
                        width: 1em;
                        height: 1em;
                        padding: .25em .25em;
                        color: #000;
                        border: 0;
                        border-radius: .375rem;
                        opacity: .5;
                      }
                      .modal-body {
                        position: relative;
                        flex: 1 1 auto;
                        padding: var(--bs-modal-padding);
                      }
                      *, ::after, ::before {
                        box-sizing: border-box;
                      }
                      * {
                        font-family: 'Roboto', sans-serif;
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                        outline: none;
                        border: none;
                        text-decoration: none;
                        text-transform: capitalize;
                        transition: .2s linear;
                      }
                      .modal-content {
                        color: var(--bs-modal-color);
                        pointer-events: auto;
                      }
                      .form-label {
                        margin-bottom: .5rem;
                        font-size: 18px;
                      }
                      .modal-title {
                        margin-bottom: .5rem;
                        font-size: 30px;
                      }
                      .modal-footer {
                        display: flex;
                        flex-shrink: 0;
                        flex-wrap: wrap;
                        align-items: center;
                        justify-content: flex-end;
                        padding: calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap) * .5);
                        background-color: var(--bs-modal-footer-bg);
                        border-top: var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color);
                        border-bottom-right-radius: var(--bs-modal-inner-border-radius);
                        border-bottom-left-radius: var(--bs-modal-inner-border-radius);
                        margin: calc(var(--bs-modal-footer-gap) * .5);
                      }
                `}
            </style>
            <button className="btn" onClick={handleShow}>Read More</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>{props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                               esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                               esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.</Form.Label>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Pop_up;