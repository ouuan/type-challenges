type AppendArgument<Fn extends (...args: never[]) => unknown, A> = (...args: [...Parameters<Fn>, A]) => ReturnType<Fn>
