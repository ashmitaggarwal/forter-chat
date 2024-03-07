import { html } from 'lit-element'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import {randomText} from "../../utils/randomText.js";

const template = function(_this) {
    return (
        function () {
            const { users } = this.roomMetadata
            return html`
                <div class="chatbot-header">
                    <div class="chatbot-name">
                        <span style="float: right;">${unsafeHTML(this.icon)}</span>
                        ${this['roomName']}
                    </div>
                    <label for="name">Username:
                        <input
                                .value="${this.name}"
                                @input="${this.onNameChange}"
                                autocomplete="off"
                                id="name"/>
                    </label>
                </div>
                <div class="chatbot-container">
                    <div class="chatbot-users">
                        <div class="scroller">
                            ${Object.values(users).map((data, sn) => html`
                                <div class="user-box">
                                    <img src=${`https://picsum.photos/50/50/?random=` + sn}>
                                    <p>${data}</p>
                                </div>
                            `)}
                        </div>
                    </div>
                    <div class="chatbot-messages">
                        ${this.roomMessages.map((data, sn) => html`
                            <div>
                                <div class="chat-message">${data.name}: <span
                                        class="message">${unsafeHTML(data.text + '')}</span></div>
                                <div class="chat-message">Bot: <span
                                        class="message">${unsafeHTML(randomText[sn < 10 ? sn : Math.floor(sn % 10)]?.message || '')}</span>
                                </div>
                            </div>
                        `)}
                        <div class="scroll-to-view"></div>
                    </div>
                </div>
                <div class="chatbot-footer">
                    <label for="name">Say:
                        <input
                                .value="${this.inputText}"
                                @input="${this.onInputChange}"
                                @keypress="${this.onInputKeyPress}"
                                autocomplete="off"
                                id="text"/>
                    </label>
                    <button @click="${this.clearInput}">Clear</button>
                </div>
            `}
    ).call(_this)
}

export default template
