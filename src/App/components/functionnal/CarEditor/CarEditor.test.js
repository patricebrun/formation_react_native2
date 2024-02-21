/**
 * @format
 */

import 'react-native';
import React from 'react';
import CarEditor from './CarEditor';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
const testcar = {
  id: 0,
  imat: 'bs-709-gx',
  couleur: 'bleu',
  marque: 'renault',
  model: 'megane II',
  photo:
    'https://th.bing.com/th/id/R.249c24da93d2105b0dcec7540c73ce1b?rik=5PakK0TbFfTVJA&riu=http%3a%2f%2fwww.encyclautomobile.fr%2fweb%2f_encyclauto%2fcars%2f263%2fmegane_2_2_f1_b.jpg&ehk=KTbl96eayslV9INUj6ejTTghHZ7kVn6IIEc8M7rj1tw%3d&risl=&pid=ImgRaw&r=0',
  disponible: true,
  prix: 2000,
};
it('renders correctly', () => {
  renderer.create(<CarEditor car={testcar} />);
});
