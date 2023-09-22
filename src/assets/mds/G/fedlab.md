### Fedlab学习

----

本目录下代码为对Fedlab框架的学习。

此处仅记录一些学习过程中对该框架的一些额外发现和思考。

#### 关于fedlab

fedlab作为联邦学习的框架，对于联邦学习的新手而言其实也并不友好，但是是目前最友好的一个框架了。学习过程中也找寻了一些其他的框架，尽管存在更简单的框架，但是会表现出封装程度过高的特点，这对于新手的学习而言也并不是什么好事。而比较于其他更为专业的框架而言，fedlab还是没有完全难为我们新手。

事实上在联邦学习刚刚兴起各家争鸣的今天，所有的框架都并不在意对入门级新手的友好程度，甚至在网络上基本找不到任何0基础教程。在不断放弃之后，我还是回来选择了fedlab。至少，这是一个通过阅读代码可以学会的框架。

#### quick start

今天是2023-7-26，我在2023-7-21下载了fedlab的最新源码，跑了一下example里最简单的示例代码，有错误。对于命令行参数`total_client`前后变量命名不一致，这样的错误没有任何价值。

fedlab的文档中说自己是一个像乐高一样可以拼装的存在，现在看起来是这样的。示例代码standalone.py中已经很明晰地展现了这一特点，但是作者并没有为我们拼上任何交互的程序。可以很清晰的读出，示例代码中完成了handler的配置，trainer及其优化器的配置，以及pipeline的配置，这很符合我对联邦学习最经典最基础最简单模型的理解，即实现服务器，用户，通信，三大模块。然而示例代码在修改基础错误并运行后，只留下了三遍：

```
This is a example implementation. Please read the source code at fedlab.core.standalone.
```

真是遗憾啊。我本来以为所有作品的示例代码都可以很直观很完整很温柔地展现给初学者这个领域的魅力。

#### fedavg

联邦学习中server参数更新算法中最简单最经典的应该就是fedavg了吧，因此不出意料地standalone的示例代码中也是选择了fedavg。具体参数配置就不赘述了，该示例中，数据集为MNIST，clients使用多层感知机MLP为训练模型，前向传播4次，激活函数为ReLU，使用交叉熵CE作为损失函数，采用随机梯度下降法SGD进行优化，通信后server采用联邦平均算法fedavg进行参数更新。这是一个很完整的代码，只可惜在pipeline的evaluate函数中，本应使用测试集对当前com_pound结束后handler中的模型进行测试评估，但是作者并没有帮我们写好的想法，而是留下了上文中的那句话。没办法，要开始自己完成这部分了。

在源码中留下了这样的痕迹。

```python
# evaluate
self.evaluate()
# self.handler.evaluate()
```

这坚定了我要继承SyncServerHandler加入evaluate()方法再重载StandalonePipeline中evaluate()方法的想法，而不是直接在pipeline中加载数据集作测试。我想，测试绑定的对象应该是handler或者trainer而非pipeline，尤其是有人想要在trainer上做不同测试的情况下，这才使得原本调用handler的evaluate()方法的设计被pipeline的evaluate()方法取缔。当然，这样的实现方式也有可能是我领会错了作者的意图，但是我喜欢。

测试的方法和之前学习神经网络时的方法在我目前看来是基本一致的。我观察了示例代码配置下的模型正确率。

```shell
python standalone.py --total_client 100 --com_round 20 --sample_ratio 0.2 --batch_size 64 --epochs 10 --lr 0.05
```

所有参数在这附近我都尝试过微调，但是总体都表现出：正确率反复波动，起步正确率极低约10%左右，收敛正确率不高，通常在75%至88%不等。作为初学者，我并不清楚这样的结果是否符合预期。

