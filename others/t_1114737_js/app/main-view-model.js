var Observable = require("data/observable").Observable;
var ObservableArray = require("data/observable-array").ObservableArray;

function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return counter + " taps left";
    }
}

function createViewModel() {
    var viewModel = new Observable();

    viewModel.isInitialized = true;

    viewModel.items = new ObservableArray();

    viewModel.items.push({ "id": 1, "name": "John"});
    viewModel.items.push({ "id": 2, "name": "Daniel" });
    viewModel.items.push({ "id": 3, "name": "Mery" });
    viewModel.items.push({ "id": 4, "name": "Chris" });
    viewModel.items.push({ "id": 5, "name": "Anna" });

    viewModel.items.push({ "id": 11, "name": "John" });
    viewModel.items.push({ "id": 12, "name": "Daniel" });
    viewModel.items.push({ "id": 13, "name": "Mery" });
    viewModel.items.push({ "id": 14, "name": "Chris" });
    viewModel.items.push({ "id": 15, "name": "Anna" });

    viewModel.items.push({ "id": 21, "name": "John" });
    viewModel.items.push({ "id": 22, "name": "Daniel" });
    viewModel.items.push({ "id": 23, "name": "Mery" });
    viewModel.items.push({ "id": 24, "name": "Chris" });
    viewModel.items.push({ "id": 25, "name": "Anna" });

    viewModel.items.push({ "id": 31, "name": "John" });
    viewModel.items.push({ "id": 32, "name": "Daniel" });
    viewModel.items.push({ "id": 33, "name": "Mery" });
    viewModel.items.push({ "id": 34, "name": "Chris" });
    viewModel.items.push({ "id": 35, "name": "Anna" });


    return viewModel;
}

exports.createViewModel = createViewModel;