# agent-security-scanner-cli

> Package 4: cli for AI Security Scanner

## Installation

```bash
npm install @agent-security-scanner/agent-security-scanner-cli
```

## Usage

```javascript
import { AgentSecurityScannerCli } from '@agent-security-scanner/agent-security-scanner-cli';

const service = new AgentSecurityScannerCli();
await service.init();
const result = await service.execute({ data: 'test' });
```

## API

- `init()` - Initialize the service
- `execute(input)` - Execute the service
- `health()` - Health check

## License

MIT
