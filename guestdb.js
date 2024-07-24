import chalk from 'chalk';

export const addGuest = (name,address,age,date) => {
  console.log(chalk.green('adding',name,address,age,date));
};

export const updateGuest = (id,name,address,age,date) => {
  console.log(chalk.red('updating',id,name,address,age,date));
};

export const deleteGuest = (id) => {
  console.log(chalk.white('deleting',id));
};

export const readGuest = (id) => {
  console.log(chalk.blue('reading',id));
};

export const listGuest = (id) => {
  console.log(chalk.yellow('listviwe',id));
};
