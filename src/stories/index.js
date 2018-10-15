import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TabView from '../components/TabView'

storiesOf('TabView', module)
  .add('Normal TabView', () => (
    <TabView/>
  ));