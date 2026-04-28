# @axonyx/react

React wrappers for **Axonyx UI Foundry** - an industrial, dark-first design system for product UI, developer tools, dashboards, and docs.

`@axonyx/react` does not own the visual system. It maps React components to the shared CSS/data-attribute contract from `@axonyx/ui`.

```txt
@axonyx/ui      = CSS tokens, themes, component styles, small JS islands
@axonyx/react   = React wrappers around the same Axonyx UI contract
```

## Install

```bash
npm install @axonyx/ui @axonyx/react
```

## Next.js setup

Import the CSS once in `app/layout.tsx`:

```tsx
import "@axonyx/ui/css/index.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="silver">
      <body>{children}</body>
    </html>
  );
}
```

Available themes:

```html
<html data-theme="silver">
<html data-theme="bronze">
<html data-theme="gold">
```

## Basic usage

```tsx
import { Alert, Button, Card, Cluster, Stack } from "@axonyx/react";

export default function Page() {
  return (
    <main style={{ padding: "3rem" }}>
      <Card surface="forged" border="forged">
        <Stack gap="md">
          <Alert tone="success" title="Axonyx is live">
            @axonyx/ui and @axonyx/react are installed from npm.
          </Alert>

          <Cluster gap="sm">
            <Button variant="primary" surface="forged">
              Deploy
            </Button>
            <Button variant="ghost">Open docs</Button>
          </Cluster>
        </Stack>
      </Card>
    </main>
  );
}
```

## Components

Current server-safe React wrappers:

- `Button`
- `Card`
- `Badge`
- `Alert`
- `Stack`
- `Cluster`
- `Field`
- `Input`
- `Textarea`
- `Select`
- `Option`

Client-only wrappers:

- `Tabs`, `TabList`, `TabTrigger`, `TabPanel` from `@axonyx/react/client`
- `Dialog`, `DialogHeader`, `DialogTitle`, `DialogContent` from `@axonyx/react/client`

## Buttons

```tsx
<Button>Default</Button>
<Button variant="primary">Primary</Button>
<Button variant="ghost">Ghost</Button>
<Button surface="forged" variant="primary">Forged Primary</Button>
<Button border="forged">Rivet Button</Button>
```

## Cards

```tsx
<Card>Default panel</Card>
<Card surface="brushed">Brushed panel</Card>
<Card surface="forged" border="forged">Forged panel</Card>
<Card surface="inset">Inset panel</Card>
```

## Forms

```tsx
import { Field, Input, Option, Select, Textarea } from "@axonyx/react";

export function SettingsForm() {
  return (
    <Stack gap="md">
      <Field label="Project name" hint="Used for build output and metadata.">
        <Input placeholder="axonyx-ui" />
      </Field>

      <Field label="API key" error="Invalid key format.">
        <Input invalid placeholder="******" />
      </Field>

      <Field label="Environment">
        <Select>
          <Option>Development</Option>
          <Option>Staging</Option>
          <Option>Production</Option>
        </Select>
      </Field>

      <Field label="Description">
        <Textarea placeholder="Describe your module..." />
      </Field>
    </Stack>
  );
}
```

## Tabs

Tabs are React-native and state-based. Import them from the client entry:

```tsx
"use client";

import { Tabs, TabList, TabPanel, TabTrigger } from "@axonyx/react/client";

export function ExampleTabs() {
  return (
    <Tabs defaultValue="preview">
      <TabList>
        <TabTrigger value="preview">Preview</TabTrigger>
        <TabTrigger value="code">Code</TabTrigger>
      </TabList>

      <TabPanel value="preview">Preview content</TabPanel>
      <TabPanel value="code">Code content</TabPanel>
    </Tabs>
  );
}
```

## Dialog

Dialog is controlled by React state. Import it from the client entry:

```tsx
"use client";

import { useState } from "react";
import { Button } from "@axonyx/react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@axonyx/react/client";

export function ConfirmDialog() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogHeader>
          <DialogTitle>Confirm deploy</DialogTitle>
        </DialogHeader>
        <DialogContent>
          Are you sure you want to deploy?
        </DialogContent>
      </Dialog>
    </>
  );
}
```

## Relationship to @axonyx/ui

`@axonyx/react` expects `@axonyx/ui` to provide styles. The React package intentionally stays thin:

```tsx
<Button variant="primary" surface="forged" />
```

renders the shared contract:

```html
<button class="ax-button" data-variant="primary" data-surface="forged"></button>
```

This keeps Axonyx usable across React, static HTML, and native `.ax` components.

## Links

- npm: https://www.npmjs.com/package/@axonyx/react
- Core UI package: https://www.npmjs.com/package/@axonyx/ui
- GitHub: https://github.com/vladanPro/axonyx-react
