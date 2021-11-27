import "@ui5/webcomponents/dist/List.js";
import "@ui5/webcomponents/dist/StandardListItem.js"; //(for ui5-li)
import "@ui5/webcomponents/dist/CustomListItem.js"; //(for ui5-li-custom)
import "@ui5/webcomponents/dist/GroupHeaderListItem.js"; //(for ui5-li-groupheader)
import "@ui5/webcomponents/dist/Table.js";
import "@ui5/webcomponents/dist/TableColumn.js"; //(for ui5-table-column)
import "@ui5/webcomponents/dist/TableRow.js"; //(for ui5-table-row)
import "@ui5/webcomponents/dist/TableCell.js"; //(for ui5-table-cell)
import { XE } from 'xtal-element/src/XE.js';
import { tm } from 'trans-render/lib/mixins/TemplMgmtWithPEST.js';
import 'be-ferried/be-ferried.js';
const mainTemplate = tm.html `
<slot be-ferried='{
    "xslt": ".xsltPath"
}'></slot>
<div></div>
<be-hive></be-hive>
`;
export class BraKetUi5Controller extends HTMLElement {
}
const xe = new XE({
    config: {
        tagName: 'bra-ket-ui5',
        propDefaults: {
            'xsltPath': ''
        },
        actions: {
            ...tm.doInitTransform
        }
    },
    complexPropDefaults: {
        mainTemplate
    },
    superclass: BraKetUi5Controller,
    mixins: [tm.TemplMgmtMixin],
});
export const BraKetUi5 = xe.classDef;
