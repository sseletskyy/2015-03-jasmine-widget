describe("TemperatureWidget", function () {

    var widget;
    var $container;

    beforeEach(function () {
        jasmine.Ajax.install();
    });

    afterEach(function () {
        jasmine.Ajax.uninstall();
    });

    // INIT WIDGET PARENT
    beforeEach(function () {
        $container = $('<div class="test-contaier"></div>');
        $container.appendTo('body');

    });

    afterEach(function () {
        $container.remove();
    });

    // INIT WIDGET
    beforeEach(function () {
        widget = new TemperatureWidget($container);
    });

    describe("when initialized", function () {
        it("should fetch temperature from server", function () {
            expect(jasmine.Ajax.requests.mostRecent().url).toEqual("/api/temperature");
        });
    });

    describe("when rendered", function () {
        it("display temperature as '22 C", function () {
           expect($container.find('.temperature-widget').text()).toEqual('22 C');
        });
    });

});



















