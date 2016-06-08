import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Select from '../../src/Select';
// import fetch from 'isomorphic-fetch';

const stories = storiesOf('ReactSelect', module);

stories.add('basic select', () => {
  var options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
  ];
  return (
    <Select
      name="form-field-name"
      value="one"
      options={options}
      onChange={action('onChange')}
      onValueClick={action('onValueClick')}
    />
  );
});

stories.add('multi select', () => {
  const FLAVOURS = [
    { label: 'Chocolate', value: 'chocolate' },
    { label: 'Vanilla', value: 'vanilla' },
    { label: 'Strawberry', value: 'strawberry' },
    { label: 'Caramel', value: 'caramel' },
    { label: 'Cookies and Cream', value: 'cookiescream' },
    { label: 'Peppermint', value: 'peppermint' },
  ];
  return (
    <Select
      name="form-field-name"
      value="one"
      multi
      options={FLAVOURS}
      onChange={action('onChange')}
      onValueClick={action('onValueClick')}
    />
  );
});

stories.add('async select', () => {
  const getUsers = function (input) {
		return fetch(`https://api.github.com/search/users?q=${input}`)
      .then((response) => response.json())
      .then((json) => {
        return [
          { label: 'Chocolate', value: 'chocolate' },
          { label: 'Vanilla', value: 'vanilla' },
          { label: 'Strawberry', value: 'strawberry' },
          { label: 'Caramel', value: 'caramel' },
          { label: 'Cookies and Cream', value: 'cookiescream' },
          { label: 'Peppermint', value: 'peppermint' },
        ];
        // return { options: json.items };
      });
  };

  return (
    <Select.Async
      name="form-field-name"
      multi
      loadOptions={getUsers}
      onChange={action('onChange')}
      onValueClick={action('onValueClick')}
    />
  );
});
