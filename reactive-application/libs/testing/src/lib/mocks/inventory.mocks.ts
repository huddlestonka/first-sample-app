import { of } from 'rxjs';

export const mockInventoryFacade = {
  loadUsers: () => {},
  selectUser: () => {},
  deleteUser: () => {},
  updateUser: () => {},
  createUser: () => {},
  mutations$: of(true),
};

export const mockInventoryService = {
  all: () => of([]),
  find: () => of({ ...mockInventory }),
  create: () => of({ ...mockInventory }),
  update: () => of({ ...mockInventory }),
  delete: () => of({ ...mockInventory }),
};

export const mockInventory = {
  id: '0',
  title: 'mock',
  firstName: 'mock',
  lastName: 'mock',
  email: 'mock',
  password: 'mock',
};

export const mockEmptyInventory = {
  id: null,
  title: 'mockEmpty',
  firstName: 'mockEmpty',
  lastName: 'mockEmpty',
  email: 'mockEmpty',
  password: 'mockEmpty',
};
