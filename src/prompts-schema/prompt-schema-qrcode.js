import chalk from "chalk";

const promptSchemaQRCode = [
	{
		name: "link",
		description: chalk.yellow.bold("Digite o link para gerar o QRCODE"),
	},
	{
		name: "type",
		description: chalk.yellow.bold(
			"Escolha entre o tipo de QRCode (1 - NORMAL ou 2 - TERMINAL)"
		),
		pattern: /^[1-2]+$/,
		message: chalk.red.italic(
			"Por favor, selecione 1 para NORMAL ou 2 para TERMINAL"
		),
		required: true,
	},
];

export default promptSchemaQRCode;
