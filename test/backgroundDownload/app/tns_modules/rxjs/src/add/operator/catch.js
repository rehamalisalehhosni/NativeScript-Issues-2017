"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("../../Observable");
var catch_1 = require("../../operator/catch");
Observable_1.Observable.prototype.catch = catch_1._catch;
Observable_1.Observable.prototype._catch = catch_1._catch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0Y2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLCtDQUE4QztBQUM5Qyw4Q0FBOEM7QUFFOUMsdUJBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLGNBQU0sQ0FBQztBQUNwQyx1QkFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsY0FBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBfY2F0Y2ggfSBmcm9tICcuLi8uLi9vcGVyYXRvci9jYXRjaCc7XG5cbk9ic2VydmFibGUucHJvdG90eXBlLmNhdGNoID0gX2NhdGNoO1xuT2JzZXJ2YWJsZS5wcm90b3R5cGUuX2NhdGNoID0gX2NhdGNoO1xuXG5kZWNsYXJlIG1vZHVsZSAnLi4vLi4vT2JzZXJ2YWJsZScge1xuICBpbnRlcmZhY2UgT2JzZXJ2YWJsZTxUPiB7XG4gICAgY2F0Y2g6IHR5cGVvZiBfY2F0Y2g7XG4gICAgX2NhdGNoOiB0eXBlb2YgX2NhdGNoO1xuICB9XG59Il19