export function doSocialLogin(formProvider: FormData) {
  const provider = formProvider.get("action");
  console.log(provider);
}

// export const doDeleteLogin = () => {};
