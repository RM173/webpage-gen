class RequestQueue {
	constructor() {
		this.queue = [];
		this.isProcessing = false;
	}

	addToQueue(requestFn) {
		// Wrap the request function in another function that takes a "done" callback
		const wrappedFn = async (done) => {
			await requestFn();
			done();
		};

		// Add the wrapped function to the queue and start processing if necessary
		const promise = new Promise((resolve, reject) => {
			this.queue.push(() => wrappedFn(resolve));
			if (!this.isProcessing) {
				this.isProcessing = true;
				this.processQueue();
			}
		});

		return promise;
	}

	async processQueue() {
		while (this.queue.length > 0) {
			const requestFn = this.queue.shift();
			await requestFn();
		}
		this.isProcessing = false;
	}
}

const requestQueue = new RequestQueue();

export default requestQueue;
