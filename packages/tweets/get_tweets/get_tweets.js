function main(args) {
  const args = Array.from(arguments);
  console.log('data', JSON.stringify({args}, null, 2));

  let name = args.name || 'stranger'
  let greeting = 'Hello ' + name + '!'
  console.log(greeting)
  return { "body": greeting }
}

exports.main = main
