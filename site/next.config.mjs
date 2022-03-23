const config = {
  webpack: (config, { buildId, dev }) => {
    config.resolve.symlinks = false
    return config
  },
}

import { withContentlayer } from 'next-contentlayer'

export default withContentlayer()(config)