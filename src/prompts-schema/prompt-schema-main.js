import chalk from "chalk";

const mainPrompt = [
	{
		name: "select",
		description: chalk.yellow.bold(
			"Escolha a ferramenta (1 - QRCODE ou 2 - PASSWORD GENERATOR)"
		),
		pattern: /^[1-2]+$/,
		message: chalk.red.italic(
			"Por favor, selecione 1 para QRCODE ou 2 para PASSWORD GENERATOR"
		),
		required: true,
	},
];

export default mainPrompt;
