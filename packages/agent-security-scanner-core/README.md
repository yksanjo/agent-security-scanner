# agent-security-scanner-core

> Package 1: core for AI Security Scanner

## Installation

```bash
npm install @agent-security-scanner/agent-security-scanner-core
```

## Usage

```javascript
import { AgentSecurityScannerCore } from '@agent-security-scanner/agent-security-scanner-core';

const service = new AgentSecurityScannerCore();
await service.init();
const result = await service.execute({ data: 'test' });
```

## API

- `init()` - Initialize the service
- `execute(input)` - Execute the service
- `health()` - Health check

## License

MIT
