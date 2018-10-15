import React from 'react';
import { storiesOf } from '@storybook/react';
import TabExample from './TabExample';

storiesOf('TabView', module)
  .add('Normal TabView', () => (
    <TabExample/>
  ));
