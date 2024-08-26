import qr from "qrcode-terminal";
import chalk from "chalk";

async function handle(err, reult) {
	if (err) {
		console.log(err);
		return;
	}

	const isSmall = reult.type == 2;
	const type = isSmall ? "TERMINAL" : "NORMAL";
	qr.generate(encodeURI(reult.link), { small: isSmall }, (code) => {
		console.log(chalk.green.bold(`\n\n${type} QRCode gerado com sucesso!\n`));
		console.log(chalk.green.bold("Link: \n") + chalk.green(code));
	});
}

export default handle;
