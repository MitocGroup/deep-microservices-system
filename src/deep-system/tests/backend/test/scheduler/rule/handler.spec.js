// THIS TEST WAS GENERATED AUTOMATICALLY ON Sun Jul 31 2016 22:19:40 GMT+0300 (EEST)

'use strict';

import chai from 'chai';
import Handler from '../../../../../backend/src/scheduler/rule/Handler';
import Kernel from '../../../node_modules/deep-framework/node_modules/deep-kernel';
import KernelFactory from '../../common/KernelFactory';

// @todo: Add more advanced tests
suite('Handlers', () => {
  let handler, kernelInstance;

  test('Class Handler exists in deep-system-scheduler-rule module', () => {
    chai.expect(Handler).to.be.an('function');
  });

  test('Load Kernel by using Kernel.load()', (done) => {
    let callback = (backendKernel) => {
      kernelInstance = backendKernel;

      chai.assert.instanceOf(
        backendKernel, Kernel, 'backendKernel is an instance of Kernel'
      );

      // complete the async
      done();
    };

    KernelFactory.create(callback);
  });

  test('Check Handler constructor', () => {
    handler = new Handler(kernelInstance);

    chai.expect(handler).to.be.an.instanceof(Handler);
  });

  test('Check handle method exists', () => {
    chai.expect(handler.handle).to.be.an('function');
  });

});
