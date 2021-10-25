import { Sequelize } from 'sequelize';

export interface IInitAndAssociate {
  init: (sequelize: Sequelize) => this;
  associate: () => this;
}
