import type { TBody } from './body.type.js';
import __BodyType from './body.type.js';

import __buttonMock from '../button/button.mock.js';

import { faker } from '@faker-js/faker';
import { __pickSome } from '@lotsof/sugar/array';

export default function __bodyMock(props: TBody = {}): __BodyType {
  const buttons = __pickSome(
    [__buttonMock(), __buttonMock(), __buttonMock()],
    0,
    3,
  );

  return new __BodyType({
    suptitle: faker.number.int(1)
      ? faker.lorem.words({ min: 1, max: 3 })
      : undefined,
    title: faker.lorem.words({ min: 1, max: 5 }),
    subtitle: faker.number.int(1)
      ? faker.lorem.words({ min: 1, max: 3 })
      : undefined,
    lead: faker.number.int(1)
      ? faker.lorem.words({ min: 1, max: 20 })
      : undefined,
    text: faker.number.int(1)
      ? faker.lorem.words({ min: 1, max: 20 })
      : undefined,
    buttons,
    ...props,
  });
}
