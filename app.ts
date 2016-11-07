
import * as $ from 'jquery';
import * as d3 from 'd3';
import * as crossfilter from 'crossfilter';

// import 'd3/d3';

// import d3 from 'd3';

export class App {

    readonly sample: string = 'test';

    constructor() {
        console.log($('#test'));

        d3.json('data/speeds.json', this.callback);
    }

    callback(data: any) {
        console.log('callback');
        console.log(data);

        let filter = crossfilter(data);

        console.log(filter);
    }
}

let app = new App();

