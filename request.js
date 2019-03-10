class Github {

    constructor(){
		
    }

    async getRequest(url){
        let response = await fetch(url);
        let data = await response.json();
		return data;		
    }
	
	async putOrPostRequest(url, sendData, isPost){
		let body = {
			method: isPost,
			body: JSON.stringify(sendData),
			headers: {
			  "Content-type": "application/json; charset=UTF-8"
			}
		  };
        let response = await fetch(url, body);
        let data = await response.json();
		return data;		
    }
	
	async deleteRequest(url){
		let response = await fetch(url, {
			  method: 'DELETE',
			} );

        return "Veri silme işlemi başarılı";		
    }
}