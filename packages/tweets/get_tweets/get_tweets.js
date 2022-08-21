function main(args, context) {
  console.log('data', JSON.stringify({args, context}, null, 2));

  let name = args.name || 'stranger'
  let greeting = 'Hello ' + name + '!'
  console.log(greeting)
  return { "body": greeting }
}

exports.main = main
