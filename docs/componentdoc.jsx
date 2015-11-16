import React from 'react';
import DocBlock from './components/docblock';
import ExampleBlock from './components/exampleblock';
import PropBlock from './components/propblock';
import ExampleContentBlock from './components/examplecontentblock';

import { configParser } from './utilities';

let ComponentDoc = (props) => {
    /* eslint-disable quotes */
    let propList = require("./components/" + props.params.component + "/props.js");
    let Examples = require("./components/" + props.params.component + "/examples.jsx");
    /* eslint-enable-quotes */
    let { children, ...other } = props;

    let exampleObject = configParser(Examples);
    let exampleCode = configParser(Examples, true);
    let exampleArray = [];

    Object.keys(exampleObject).forEach(example => {
        exampleArray.push(
            <ExampleContentBlock
                example={example}
                exampleCode={exampleCode}
                exampleObject={exampleObject}
                key={example}
            />
        )
    });

    return (
        <DocBlock title={props.params.component}>
            <ExampleBlock>
                {exampleArray}
            </ExampleBlock>
            <PropBlock propList={propList}/>
        </DocBlock>
    );
};

ComponentDoc.propTypes = {
    children: React.PropTypes.node,
    params: React.PropTypes.object
}

export default ComponentDoc;