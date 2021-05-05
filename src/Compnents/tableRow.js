import React from 'react';

export default class TableRow extends React.Component {
    state = { expanded: false }

    toggleExpander = (e) => {
        if (e.target.type === 'checkbox') return;

        if (!this.state.expanded) {
            this.setState(
                { expanded: true },
                () => {
                    if (this.refs.expanderBody) {
                        slideDown(this.refs.expanderBody);
                    }
                }
            );
        } else {
            slideUp(this.refs.expanderBody, {
                onComplete: () => { this.setState({ expanded: false }); }
            });
        }
    }
}