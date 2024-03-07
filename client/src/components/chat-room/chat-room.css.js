import { css } from 'lit';

export default css`
    :host {
        display: block;
        font-family: inherit;
        min-height: 100px;
        padding: 40px;
        width: 50%;
        margin: auto;
        border-radius: 8px;
    }

    .chatbot-name {
        margin-bottom: 15px;
    }

    .chatbot-header {
        background-color: #3f51b5;
        color: #fff;
        padding: 10px;
        height: 60px;
        text-align: center;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }

    .chatbot-footer {
        background-color: #eeee;
        border-bottom: 1px solid darkblue;
        color: black;
        display: flex;
        font-weight: 700;
        justify-content: space-between;
        padding: 15px;
    }

    .chatbot-footer #text {
        margin-top: 20px;
    }

    .chatbot-header {
        flex-direction: column;
    }

    .chatbot-footer {
        border-bottom: none;
        border-top: 1px solid darkblue;
    }

    .chatbot-container {
        background-color: #DAF2F8FF;
        display: flex;
        gap: 20px;
        height: 250px;
        padding: 15px;

        padding: 15px;
    }

    .chatbot-users {
        border-right: 1px solid darkblue;
        overflow-y: scroll;
        overflow-x: hidden;
        padding-right: 10px;
        width: 100px;
    }

    .chatbot-users > div {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
    }

    .chat-message {
        margin-bottom: 10px;
        padding: 8px 10px;
        border: 1px solid black;
        max-width: 100%;
        background-color: #eee;
        overflow: auto;
        border-radius: 8px;
    }

    .chatbot-messages {
        overflow-y: scroll;
        scroll-behavior: smooth;
        width: 60%;
        overflow: auto;
    }

    .chatbot-messages .message {
        float: right;
        font-weight: bold;
        width: 50%;
    }


    .scroller {
        height: 100%;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    label {
        width: 100%;
    }

    .text {
        height: 100%;
    }

    #name,
    #text {
        background-color: #fff;
        border: none;
        font-size: inherit;
        font-weight: inherit;
        outline: none;
        width: 50%;
        height: 20px;
        padding: 4px 11px;
        border-radius: 8px;
    }

    #text {
        width: 80%;
        height: 50px;

    }

    #name:focus,
    #text:focus {
        border-bottom: 1px solid darkblue;
        outline: none;
    }

    #text {
        border-bottom: 1px solid darkblue;
    }

    button {
        background: rgb(0, 93, 232);
        border-radius: 120px;
        border: none;
        box-shadow: rgba(0, 71, 255, 0.07) 0px 60px 80px, rgba(0, 71, 255, 0.05) 0px 30.1471px 24.1177px, rgba(0, 71, 255, 0.04) 0px 12.5216px 10.0172px, rgba(0, 71, 255, 0.02) 0px 4.5288px 3.62304px;
        color: #fff;
        display: inline-block;
        font-size: 14px;
        line-height: 34px;
        min-height: 34px;
        padding: 0px 30px;
        height: 40px;
        margin-top: 40px;
        transition: all 0.3s;
        width: auto;
    }

    button:hover {
        background: #1f283d;
        color: #fff;
    }

    .scroll-to-view {
    }

    .user-box {
        height: 30px;
        padding: 15px 5px;
        line-height: 200%;
        color: #aaa;
        font-size: 0.5rem;
        position: relative;
        display: flex;

    }

    .user-box:hover {
        background: #eaeaea;
        cursor: pointer;
    }

    .user-box img {
        width: 30px;
        border-radius: 50%;
        margin-right: 5px;
        height: 30px;
    }

    .user-box p {
        margin-bottom: 0;
        color: #000;
        margin-top: 8px;
        font-size: 12px;
    }
`
