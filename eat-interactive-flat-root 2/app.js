const artboard = document.querySelector('.artboard');
      const choices = document.querySelectorAll('.choice-trigger');
      const help = document.querySelector('.help-trigger');
      const share = document.querySelector('.share-trigger');
      const reselect = document.querySelector('.reselect-trigger');
      const reselectOptions = document.querySelectorAll('.reselect-option');
      const reselectConfirm = document.querySelector('.reselect-confirm');
      const retryCount = document.querySelector('.retry-count');
      const newRetryCount = document.querySelector('.new-retry-count');
      const closeShare = document.querySelector('.close-share');
      const back = document.querySelector('.back-trigger');
      let loadingTimer;
      let retries = 8;
      choices.forEach((choice) => choice.addEventListener('click', () => {
        choices.forEach((item) => item.classList.remove('is-active'));
        choice.classList.add('is-active');
      }));
      help.addEventListener('click', () => {
        artboard.classList.add('is-result');
      });
      share.addEventListener('click', () => {
        window.clearTimeout(loadingTimer);
        artboard.classList.remove('is-sharing');
        artboard.classList.add('is-loading');
        loadingTimer = window.setTimeout(() => {
          artboard.classList.remove('is-loading');
          artboard.classList.add('is-sharing');
        }, 300);
      });
      reselect.addEventListener('click', () => {
        retries = Math.max(0, retries - 1);
        retryCount.textContent = String(retries);
        artboard.classList.add('is-reselecting');
      });
      reselectOptions.forEach((option) => option.addEventListener('click', () => {
        reselectOptions.forEach((item) => item.classList.remove('is-active'));
        option.classList.add('is-active');
      }));
      reselectConfirm.addEventListener('click', () => {
        retries = Math.max(0, retries - 1);
        retryCount.textContent = String(retries);
        newRetryCount.textContent = String(retries);
        artboard.classList.remove('is-result', 'is-reselecting');
        artboard.classList.add('is-new-food');
      });
      back.addEventListener('click', () => {
        window.clearTimeout(loadingTimer);
        artboard.classList.remove('is-result', 'is-loading', 'is-sharing', 'is-reselecting', 'is-new-food');
      });
      closeShare.addEventListener('click', () => {
        artboard.classList.remove('is-sharing');
      });