import { cac } from 'cac';
import { glob } from 'glob';

const cli = cac('templates');

cli.option('--test', 'some test flag');


cli.version('1.0.0');
cli.help();
cli.parse();

glob(__dirname + '/../../../templates/**/.template', console.log)


// TEMPLATE_REPO=https://github.com/cseitz/templates TEMPLATE_PATH=templates/projects/node git clone --no-checkout --sparse $TEMPLATE_REPO repo && cd repo && git sparse-checkout add $TEMPLATE_PATH

// git clone --filter=blob:none --no-checkout --depth 1 --sparse https://github.com/cseitz/templates
