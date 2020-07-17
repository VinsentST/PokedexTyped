export const parseId = (url:string):string|undefined => {
	const myregexp = /\/(\d+)\//;
	var match = myregexp.exec(url);
	if (match != null) {
		let result = match[1];
		return (result);
      }else{
            return undefined;
      }
};