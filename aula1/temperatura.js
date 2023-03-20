import chalk from 'chalk';

temperaturaPaciente(100, 140);

function temperaturaPaciente(x, y) {
    if (x <= y) {
        console.log(chalk.green('Paciente não-febril'));
    } else {
        console.log(chalk.red('Paciente febril'));
    }
}