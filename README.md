# @start-base/start-ui

![npm](https://img.shields.io/badge/license-MIT-green.svg)
![npm](https://img.shields.io/npm/v/%40start-base%2Fstart-ui)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/%40start-base%2Fstart-ui)
![npm](https://img.shields.io/npm/dt/%40start-base/start-ui)

## Demos

For live demos, please visit our [Storybook](https://start-ui-storybook.vercel.app/) page.

For detailed documentation and live demos, please visit our [Documentation](https://start-ui.startbase.dev/) page.

## Introduction

This npm package provides a multitude of UI-related React components designed for Next.js. You can use these components to build websites with ease. All components include:

- CSS variables for theming.
- Classnames for fine tuning.
- Built-in dark mode support.
- Variants for different styles.

## Installation

To install, you can use [npm](https://npmjs.org) or [yarn](https://yarnpkg.com):

```bash title='Terminal'
$ npm install @start-base/start-ui
# or
$ yarn add @start-base/start-ui
```

Make sure to import the styles file to your app:

```tsx
import '@start-base/start-ui/styles.css';
```

## Usage

Each component can be used separately or imported from the root:

```tsx title='Page.tsx'
import { Button } from '@start-base/start-ui';
// OR
import Button from '@start-base/start-ui/Button';

export default function Page() {
  function handleClick() {
    console.log('Start-UI');
  }

  return (
    <main>
      <Button onClick={handleClick}>Start-UI</Button>
    </main>
  );
}
```

**IMPORTANT:** Since some Start-UI components utilize React hooks, we suggest importing them separately when used inside client-side components.

## Components

### Accordion

A series of interactive headings arranged vertically, each revealing a section of content when clicked. **Client-only**.

```tsx
import Accordion from '@start-base/start-ui/Accordion';

<div>
  <Accordion summary="Accordion 1">Start-UI</Accordion>
  <Accordion summary="Accordion 2">Start-UI</Accordion>
  <Accordion summary="Accordion 3">Start-UI</Accordion>
</div>;
```

A group of `Accordion` components should be grouped together inside a parent element for proper styling.

#### Accordion Properties

| Name               | Type             | Default     | Description                                                                                                                                       |
| ------------------ | ---------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| summary            | `ReactNode`      | `undefined` | A summary of the content.                                                                                                                         |
| children           | `ReactNode`      | `undefined` | The main content.                                                                                                                                 |
| actions            | `ReactNode`      | `undefined` | Action elements placed below `children`.                                                                                                          |
| icon               | `ReactNode`      | `undefined` | Custom icon element that will be placed at the end of `summary`.                                                                                  |
| className          | `string`         | `undefined` | Additional class to be passed to root.                                                                                                            |
| summaryClassName   | `string`         | `undefined` | Additional class to be passed to `summary`.                                                                                                       |
| actionsClassName   | `string`         | `undefined` | Additional class to be passed to `actions`.                                                                                                       |
| containerClassName | `string`         | `undefined` | Additional class to be passed to container, which contains root, `summary` and `actions`.                                                         |
| variant            | `string`         | `'drawer'`  | Styling variant. Possible options are `'drawer' \| 'individual'`.                                                                                 |
| expanded           | `boolean`        | `undefined` | Controls whether the component is expanded or not.                                                                                                |
| onExpand           | `function`       | `undefined` | Callback function to run when `summary` is clicked.                                                                                               |
| unmountOnExit      | `boolean`        | `false`     | Controls whether the `children` should unmount when `expanded` is false. Disables CSS animations but improves performance for very large content. |
| defaultExpanded    | `boolean`        | `false`     | Controls whether the component is expanded or not when first mounting.                                                                            |
| disabled           | `boolean`        | `false`     | Controls whether the component should expand or collapse when `summary` is clicked.                                                               |
| ...props           | `HTMLAttributes` |             | Common HTML attributes to be passed to root.                                                                                                      |

The Accordion components has two modes: _controlled_ or _uncontrolled_, which is decided automatically depending on whether its state is controlled externally or internally. They differ slightly when it comes to their properties:

#### Controlled Accordion Properties

| Name       | Type       | Default     | Description                                         |
| ---------- | ---------- | ----------- | --------------------------------------------------- |
| expanded\* | `boolean`  | `undefined` | Controls whether the Accordion is expanded or not.  |
| onExpand\* | `function` | `undefined` | Callback function to run when `summary` is clicked. |

### Alert

A versatile component that displays a message to the user with various customization options. It supports different severity levels, variants, colors, and additional actions.

#### Alert Properties

| Name           | Type                   | Default     | Description                                                                                                                                                 |
| -------------- | ---------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children       | `ReactNode`            | `undefined` | The main content.                                                                                                                                           |
| severity       | `string`               | `success`   | Severity of the component. Controls the colors to be used for the styling and the icon. Possible options are `'success' \| 'info' \| 'warning' \| 'error'`. |
| variant        | `string`               | `default`   | Styling variant. Possible options are `'default' \| 'filler' \| 'outlined'`.                                                                                |
| color          | `string`               | `inherit`   | Colors to be used for styling. Overrides `severity`. Possible options are `'inherit' \| 'success' \| 'info' \| 'warning' \| 'error'`.                       |
| actionElement  | `ReactNode`            | `undefined` | Action element placed after `children`.                                                                                                                     |
| icon           | `ReactNode \| boolean` | `true`      | Controls the component icon. Given a boolean value will display or hide the icon. Can be given a custom icon element to be displayed.                       |
| alertTitle     | `string \| boolean`    | `false`     | Controls the component title above the main content. Given a boolean value will display or hide the title. Can be given a custom title.                     |
| open           | `boolean`              | `true`      | Controls whether the component is displayed or not.                                                                                                         |
| className      | `string`               | `undefined` | Additional class to be passed to root.                                                                                                                      |
| iconClassName  | `string`               | `undefined` | Additional class to be passed to `icon`.                                                                                                                    |
| bodyClassName  | `string`               | `undefined` | Additional class to be passed to body, which contains `title` and `children`.                                                                               |
| titleClassName | `string`               | `undefined` | Additional class to be passed to `alertTitle`.                                                                                                              |
| textClassName  | `string`               | `undefined` | Additional class to be passed to `children` container.                                                                                                      |
| ...props       | `HTMLAttributes`       |             | Common HTML attributes to be passed to root.                                                                                                                |

### Avatar

Used to display a user's profile picture or initials in a visually appealing manner. It supports various sizes and shapes, including circular and square variants.

#### Avatar Properties

| Name           | Type             | Default      | Description                                                                                                                 |
| -------------- | ---------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------- |
| picture        | `string`         | `''`         | Picture URL to be passed to `<img>` element.                                                                                |
| defaultPicture | `string`         | `''`         | Picture URL to be used if `picture` is not found.                                                                           |
| chars          | `string`         | `'SU'`       | Initials to be used in place of `picture`.                                                                                  |
| size           | `string`         | `'medium'`   | Size variant. Possible options are `'small' \| 'medium' \| 'large'`                                                         |
| variant        | `string`         | `'circular'` | Styling variant. Possible options are `'circular' \| 'square'`                                                              |
| className      | `string`         | `undefined`  | Additional class to be passed to root.                                                                                      |
| Component      | `ElementType`    | `'img'`      | Image component to be used to render the picture. Can be used to pass Next's Image component for optimized image rendering. |
| componentProps | `object`         | `{}`         | Additional properties to be passed to `Component`.                                                                          |
| ...props       | `HTMLAttributes` |              | Common HTML attributes to be passed to root.                                                                                |

### Badge

A series of interactive headings arranged vertically, each revealing a section of content when clicked.

#### Badge Properties

| Name               | Type             | Default       | Description                                                                                                                                                                  |
| ------------------ | ---------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children\*         | `ReactNode`      | `undefined`   | The content to which the component will be attached.                                                                                                                         |
| content\*          | `ReactNode`      | `undefined`   | The main content.                                                                                                                                                            |
| position           | `string`         | `'top-right'` | Position of `content` relative to `children`. Possible options are `'top-left' \| 'top' \| 'top-right' \| 'right' \| 'bottom-right' \| 'bottom' \| 'bottom-left' \| 'left'`. |
| color              | `string`         | `'primary'`   | Color variant. Possible options are `'primary' \| 'secondary' \| 'success' \| 'error'`.                                                                                      |
| variant            | `string`         | `'default'`   | Styling variant. Possible options are `'default' \| 'dot'`.                                                                                                                  |
| invisible          | `boolean`        | `false`       | Controls whether `content` is visible.                                                                                                                                       |
| className          | `string`         | `undefined`   | Additional class to be passed to `content`.                                                                                                                                  |
| containerClassName | `string`         | `undefined`   | Additional class to be passed to container, which contains `children` and `content`.                                                                                         |
| ...props           | `HTMLAttributes` |               | Common HTML attributes to be passed to root.                                                                                                                                 |

### BentoCard

A versatile and customizable card component designed to display content in a bento-style layout. It is ideal for use in marketing pages, dashboards, and other interfaces where information needs to be presented in a visually appealing and organized manner. **Client-only**.

#### BentoCard Properties

| Name                   | Type             | Default     | Description                                                            |
| ---------------------- | ---------------- | ----------- | ---------------------------------------------------------------------- |
| firstContent           | `ReactNode`      | `undefined` | The primary content.                                                   |
| secondContent          | `ReactNode`      | `undefined` | The secondary content.                                                 |
| title                  | `string`         | `undefined` | Title of the component.                                                |
| isTitleVisibleInFirst  | `boolean`        | `true`      | Controls whether `title` is visible when `firstContent` is displayed.  |
| isTitleVisibleInSecond | `boolean`        | `true`      | Controls whether `title` is visible when `secondContent` is displayed. |
| redirectTo             | `string`         | `undefined` | URL to redirect to when button is clicked.                             |
| rootClassName          | `string`         | `undefined` | Additional class to be passed to root.                                 |
| rootActiveClassName    | `string`         | `undefined` | Additional class to be passed to root's active state.                  |
| titleClassName         | `string`         | `undefined` | Additional class to be passed to `title`.                              |
| titleActiveClassName   | `string`         | `undefined` | Additional class to be passed to `title`'s active state.               |
| buttonClassName        | `string`         | `undefined` | Additional class to be passed to button.                               |
| activeButtonClassName  | `string`         | `undefined` | Additional class to be passed to button's active state.                |
| ...props               | `HTMLAttributes` |             | Common HTML attributes to be passed to root.                           |

### BentoGrid

A flexible grid layout that allows for dynamic placement of elements, enabling customization of grid items' width and height. It's ideal for creating responsive, visually appealing grids that adjust seamlessly across various screen sizes.

#### BentoGrid Properties

| Name      | Type             | Default     | Description                                                                                                           |
| --------- | ---------------- | ----------- | --------------------------------------------------------------------------------------------------------------------- |
| items\*   | `array`          | `undefined` | Grid items to be displayed. Accepts an array of type `Array<{ element: ReactNode; width: number; height: number; }>`. |
| gridCols  | `number`         | `4`         | Number of grid columns.                                                                                               |
| rowHeight | `number`         | `100`       | Height of grid rows in pixels.                                                                                        |
| ...props  | `HTMLAttributes` |             | Common HTML attributes to be passed to root.                                                                          |

### Breadcrumbs

A navigational aid in web applications, allowing users to keep track of their locations within the app hierarchy. It displays a series of links representing the current page and its ancestors, making it easy for users to navigate back to previous sections.

#### Breadcrumbs Properties

| Name            | Type     | Default     | Description                                                                                                                       |
| --------------- | -------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------- |
| data\*          | `array`  | `[]`        | Data to be used for displaying breadcrumbs. Accepts an array of type `Array<{ label: string; icon?: ReactNode; href?: string }>`. |
| separator       | `string` | `'/'`       | Character to be used to separate the breadcrumbs.                                                                                 |
| className       | `string` | `undefined` | Additional class to be passed to root.                                                                                            |
| listClassName   | `string` | `undefined` | Additional class to be passed to `<li>` element inside root.                                                                      |
| activeClassName | `string` | `undefined` | Additional class to be passed to `<li>` element's active state.                                                                   |
| itemClassName   | `string` | `undefined` | Additional class to be passed to each breadcrumb.                                                                                 |

### Button

A versatile and customizable button element that can be used in various contexts. It supports different variants, colors, sizes, and additional actions.

#### Button Properties

| Name       | Type                   | Default     | Description                                                                          |
| ---------- | ---------------------- | ----------- | ------------------------------------------------------------------------------------ |
| children\* | `ReactNode`            | `undefined` | The main content.                                                                    |
| color      | `string`               | `'primary'` | Color variant. Possible options are `'primary' \| 'secondary' \| 'destructive'`.     |
| variant    | `string`               | `'default'` | Styling variant. Possible options are `'default' \| 'link' \| 'outline' \| 'ghost'`. |
| size       | `string`               | `'medium'`  | Size variant. Possible options are `'small' \| 'medium' \| 'large' \| 'icon'`.       |
| loading    | `boolean`              | `false`     | Controls whether a loading spinner is displayed or not.                              |
| fluid      | `boolean`              | `false`     | Controls whether the component should expand horizontally to use empty space.        |
| ...props   | `ButtonHTMLAttributes` |             | Button HTML attributes to be passed to root.                                         |

### Card

A versatile UI element used to display content and actions on a single topic. It can contain various elements such as text, images, and buttons. **Client-only**.

#### Card Properties

| Name        | Type        | Default     | Description                                                                   |
| ----------- | ----------- | ----------- | ----------------------------------------------------------------------------- |
| children    | `ReactNode` | `undefined` | The main content.                                                             |
| title       | `ReactNode` | `undefined` | Title for the main content.                                                   |
| description | `ReactNode` | `undefined` | Description for the main content.                                             |
| collapsible | `boolean`   | `false`     | Controls whether the component is collapsible on click or not.                |
| fluid       | `boolean`   | `false`     | Controls whether the component should expand horizontally to use empty space. |
| className   | `string`    | `undefined` | Additional class to be passed to root.                                        |
| size        | `string`    | `'medium'`  | Size variant. Possible options are `'small' \| 'medium' \| 'large'`.          |

### Chip

A flexible and customizable UI element used to display small pieces of information, tags, or actions. It supports different variants, colors, sizes, and can include icons or be dismissible for enhanced interactivity.

#### Chip Properties

| Name       | Type             | Default     | Description                                                                                                    |
| ---------- | ---------------- | ----------- | -------------------------------------------------------------------------------------------------------------- |
| children\* | `ReactNode`      | `undefined` | The main content.                                                                                              |
| className  | `string`         | `undefined` | Additional class to be passed to root.                                                                         |
| color      | `string`         | `'primary'` | Color variant. Possible options are `'primary' \| 'secondary' \| 'success' \| 'info' \| 'warning' \| 'error'`. |
| ...props   | `HTMLAttributes` |             | Common HTML attributes to be passed to root.                                                                   |

### Countdown

A customizable React countdown component that dynamically displays only active time units, supporting multiple formats and precise millisecond accuracy. **Client-only**.

#### Countdown Properties

| Name           | Type             | Default     | Description                                                                                                         |
| -------------- | ---------------- | ----------- | ------------------------------------------------------------------------------------------------------------------- |
| date\*         | `Date \| number` | `undefined` | The date to be used as the deadline for the countdown.                                                              |
| showDay        | `boolean`        | `true`      | Controls whether day count is displayed or not.                                                                     |
| showHour       | `boolean`        | `true`      | Controls whether hour count is displayed or not.                                                                    |
| showMinute     | `boolean`        | `true`      | Controls whether minute count is displayed or not.                                                                  |
| showSecond     | `boolean`        | `true`      | Controls whether second count is displayed or not.                                                                  |
| type           | `string`         | `'default'` | Styling variant. Possible options are `'default' \| 'withSeparator' \| 'withLabels' \| 'labelsUnder' \| 'inBoxes'`. |
| rootClassName  | `string`         | `undefined` | Additional class to be passed to root.                                                                              |
| itemClassName  | `string`         | `undefined` | Additional class to be passed to item, which contains day, hour, minute, or second count.                           |
| valueClassName | `string`         | `undefined` | Additional class to be passed to value, which contains the number value of count.                                   |
| labelClassName | `string`         | `undefined` | Additional class to be passed to label, which contains the label of a value.                                        |
| ...props       | `HTMLAttributes` |             | Common HTML attributes to be passed to root.                                                                        |

### DataTable

A powerful and flexible component for displaying and managing tabular data, offering features such as sorting, filtering, pagination, and customizable columns to efficiently present large datasets in a user-friendly format.

#### DataTable Properties

| Name               | Type        | Default       | Description                                                                                                                                                                        |
| ------------------ | ----------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| data\*             | `array`     | `undefined`   | Data to be displayed. Accepts an array of type `Array<Record<string, unknown>>`.                                                                                                   |
| columns\*          | `array`     | `undefined`   | Columns of the table. Accepts an array of type `Array<ColumnType<typeof data>>`. The `ColumnType` type comes from [rc-table](https://www.npmjs.com/package/rc-table#column-props). |
| title              | `ReactNode` | `undefined`   | Table title.                                                                                                                                                                       |
| emptyText          | `string`    | `undefined`   | Text to be displayed when there is no data.                                                                                                                                        |
| pagination         | `boolean`   | `false`       | Controls whether items should be paginated.                                                                                                                                        |
| rowsPerPage        | `number`    | `5`           | Maximum amount of rows per page. Requires `pagination` to be true.                                                                                                                 |
| rowsPerPageOptions | `number[]`  | `[5, 10, 20]` | Options to override `rowsPerPage`.                                                                                                                                                 |
| rowSelect          | `boolean`   | `false`       | Controls whether rows are selectable or not.                                                                                                                                       |
| rowSelectAction    | `function`  | `undefined`   | Callback function to call when row is selected. Accepts a function of type `(row: Array<string \| number>) => void`.                                                               |
| rowClassName       | `string`    | `undefined`   | Additional class to be passed to each row.                                                                                                                                         |
| border             | `boolean`   | `true`        | Controls whether borders between items should be displayed or not.                                                                                                                 |
| checkboxAvailable  | `boolean`   | `false`       | Controls whether checkbox selection for each row is displayed or not.                                                                                                              |
| filter             | `boolean`   | `false`       | Controls whether to display filter options.                                                                                                                                        |
| sorting            | `boolean`   | `false`       | Controls whether to display sort options.                                                                                                                                          |
| virtualized        | `boolean`   | `false`       | Controls whether to enable virtual scrolling. Improves performance for large datasets.                                                                                             |
| maxHeight          | `number`    | `340`         | Maximum height of the table.                                                                                                                                                       |
| maxHeight          | `number`    | `340`         | Maximum height of the table.                                                                                                                                                       |

### Divider

A versatile component that displays a message to the user with various customization options. It supports different severity levels, variants, colors, and additional actions.

#### Divider Properties

| Name         | Type             | Default        | Description                                                                          |
| ------------ | ---------------- | -------------- | ------------------------------------------------------------------------------------ |
| children     | `ReactNode`      | `undefined`    | The content to be displayed in the line.                                             |
| contentAlign | `string`         | `'center'`     | Alignment of `children`. Possible options are `'start' \| 'center' \| 'end'`.        |
| variant      | `string`         | `'fullWidth'`  | Styling variant. Possible options are `'fullWidth' \| 'start' \| 'center' \| 'end'`. |
| orientation  | `string`         | `'horizontal'` | Orientation variant. Possible options are `'horizontal' \| 'vertical'`.              |
| component    | `string`         | `div`          | HTML element to be used as root.                                                     |
| className    | `string`         | `undefined`    | Additional class to be passed to root.                                               |
| ...props     | `HTMLAttributes` |                | Common HTML attributes to be passed to root.                                         |
