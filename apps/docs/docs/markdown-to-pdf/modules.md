---
id: "modules"
title: "@portfolio/markdown-to-pdf"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Functions

### generatePdfResume

▸ **generatePdfResume**(`data?`): `Document`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Object` |
| `data.education` | `SectionData`[] |
| `data.skills` | { `category`: `string` ; `skills`: `string`[]  }[] |
| `data.work` | `SectionData`[] |

#### Returns

`Document`

#### Defined in

[lib/markdown-to-pdf.tsx:29](https://github.com/alexwine36/Portfolio/blob/4d2674b/libs/markdown-to-pdf/src/lib/markdown-to-pdf.tsx#L29)

___

### parseResume

▸ **parseResume**(`data`): (`undefined` \| `string`)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Root` |

#### Returns

(`undefined` \| `string`)[]

#### Defined in

[utilities/parse-mdast/index.tsx:13](https://github.com/alexwine36/Portfolio/blob/4d2674b/libs/markdown-to-pdf/src/utilities/parse-mdast/index.tsx#L13)

___

### parseToDoc

▸ **parseToDoc**(`data`, `doc`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Root` |
| `doc` | `Text` |

#### Returns

`void`

#### Defined in

[utilities/parse-mdast/index.tsx:106](https://github.com/alexwine36/Portfolio/blob/4d2674b/libs/markdown-to-pdf/src/utilities/parse-mdast/index.tsx#L106)

___

### renderPDF

▸ **renderPDF**(`doc`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | `Document` |

#### Returns

`Promise`<`string`\>

#### Defined in

[lib/markdown-to-pdf.tsx:165](https://github.com/alexwine36/Portfolio/blob/4d2674b/libs/markdown-to-pdf/src/lib/markdown-to-pdf.tsx#L165)
