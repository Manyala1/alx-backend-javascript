console.log('Welcome to Holberton School, what is your name?');
// await input
process.stdin.resume();
// once input is enetered
process.stdin.on('readable', () => {
	const name = process.stdin.read();
	process.stdout.write('Your name is: ${name}');
	// Check if input is coming from the terminal
	if (process.stdin.isTTY) {
		process.exit();
	} else {
		process.stdout.write('This important software is now closing\n');
		process.exit();
	}
});
